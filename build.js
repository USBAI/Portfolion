const { execSync } = require('child_process');
const fs = require('fs');

// Check if yocto-queue is installed
try {
  require.resolve('yocto-queue');
  console.log('yocto-queue is already installed');
} catch (e) {
  console.log('Installing yocto-queue...');
  execSync('npm install yocto-queue@1.2.0 --no-save', { stdio: 'inherit' });
}

// Run the build
console.log('Running build...');
execSync('react-scripts build', { stdio: 'inherit' }); 