import sanityClient from "@sanity/client";

export default sanityClient({
  apiVersion: "2022-05-11", // use a UTC date string
  projectId: "n7w9qj6q", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: false,
});
