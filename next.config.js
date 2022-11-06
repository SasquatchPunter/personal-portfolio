module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: "asset/resource",
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      }
    );

    return config;
  },
  trailingSlash: true,
};
