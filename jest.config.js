module.exports ={
    preset : 'react-native',
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    testMatch : ['**/*-test.{ts,tsx}'],
    testEnvironment : 'node',
    moduleNameMapper: {
        '\\.(css|less|scss|sass|jpg|jpeg|png|gif|webp|svg|jp?g|png|svg|gif|raw|webp|mpg|mp4|mp3|avi|ogv|ogg|wmv|amv|webm)$':
          'identity-obj-proxy'
      },
}