var contentful = require("contentful");
export const getImage = (id, assetArray) => {
  const image = assetArray.filter((asset) => asset.sys.id === id);

  return image[0].fields.file.url;
};

export const ContentfulClient = contentful.createClient({
  space: "rnas9vwjhliq",
  accessToken: "tcLuykWlQVqx8w0NWJmIs7MMxVHBuekaS8yTIg8_6jw",
});
