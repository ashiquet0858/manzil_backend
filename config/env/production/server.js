module.exports = ({ env }) => ({
  host: "0.0.0.0",
  url: env("https://manziladmin.herokuapp.com"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'aws-region',
      params: {
        Bucket: 'my-bucket',
      },
    }, 
  },
});

