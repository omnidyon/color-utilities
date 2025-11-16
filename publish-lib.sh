#!/bin/bash

# Advanced Publishing Workflow Script
# Supports different version bumps and dry runs

# USAGE:
## Dry run to see what would happen
# ./publish-advanced.sh --dry-run

# Bump minor version
# ./publish-advanced.sh --version minor

# Skip build and do dry run
# ./publish-advanced.sh --skip-build --dry-run

# Show help
# ./publish-advanced.sh --help

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
DRY_RUN=false
VERSION_BUMP="patch"
SKIP_BUILD=false

# Function to print colored output
print_status() {
    echo -e "${BLUE}🤖 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -d, --dry-run        Show what would be executed without actually publishing"
    echo "  -v, --version TYPE   Version bump type: patch, minor, major (default: patch)"
    echo "  -s, --skip-build     Skip the build step"
    echo "  -h, --help           Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                          # Standard publish with patch version bump"
    echo "  $0 --dry-run                # Dry run to see what would happen"
    echo "  $0 --version minor          # Bump minor version instead of patch"
    echo "  $0 --skip-build --dry-run   # Skip build and do dry run"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -d|--dry-run)
            DRY_RUN=true
            shift
            ;;
        -v|--version)
            VERSION_BUMP="$2"
            shift 2
            ;;
        -s|--skip-build)
            SKIP_BUILD=true
            shift
            ;;
        -h|--help)
            show_usage
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
done

# Validate version bump type
if [[ ! "$VERSION_BUMP" =~ ^(patch|minor|major)$ ]]; then
    print_error "Invalid version bump type: $VERSION_BUMP"
    echo "Please use: patch, minor, or major"
    exit 1
fi

print_status "🚀 Starting publishing workflow..."
echo "   Version bump: $VERSION_BUMP"
echo "   Dry run: $DRY_RUN"
echo "   Skip build: $SKIP_BUILD"
echo ""

if [ "$DRY_RUN" = true ]; then
    print_warning "DRY RUN MODE - No changes will be made"
fi

# Step 1: Build (unless skipped)
if [ "$SKIP_BUILD" = false ]; then
    print_status "📦 Step 1: Running build..."
    if [ "$DRY_RUN" = true ]; then
        echo "   [DRY RUN] Would execute: npm run build"
    else
        npm run build
        print_success "Build completed successfully"
    fi
else
    print_warning "Skipping build step"
fi

# Step 2: Bump version
print_status "🔢 Step 2: Bumping $VERSION_BUMP version..."
if [ "$DRY_RUN" = true ]; then
    CURRENT_VERSION=$(node -p "require('./package.json').version")
    echo "   [DRY RUN] Current version: $CURRENT_VERSION"
    echo "   [DRY RUN] Would execute: npm version $VERSION_BUMP"
else
    npm version $VERSION_BUMP
    NEW_VERSION=$(node -p "require('./package.json').version")
    print_success "Version bumped to: $NEW_VERSION"
fi

# Step 3: Publish to npm
print_status "📤 Step 3: Publishing to npm..."
if [ "$DRY_RUN" = true ]; then
    echo "   [DRY RUN] Would execute: npm publish --access public"
else
    npm publish --access public
    print_success "Published to npm successfully"
fi

# Step 4: Publish to JSR
print_status "🌐 Step 4: Publishing to JSR..."
if [ "$DRY_RUN" = true ]; then
    echo "   [DRY RUN] Would execute: npx jsr publish"
else
    npx jsr publish
    print_success "Published to JSR successfully"
fi

if [ "$DRY_RUN" = true ]; then
    print_warning "Dry run completed - no changes were made"
else
    print_success "🎉 All publishing tasks completed successfully!"
    
    # Show summary
    echo ""
    echo "📊 Publication Summary:"
    if [ "$SKIP_BUILD" = false ]; then
        echo "   - Build: ✅"
    else
        echo "   - Build: ⏭️ Skipped"
    fi
    if [ "$DRY_RUN" = false ]; then
        echo "   - Version: $NEW_VERSION ($VERSION_BUMP)"
    fi
    echo "   - npm: ✅"
    echo "   - JSR: ✅"
fi