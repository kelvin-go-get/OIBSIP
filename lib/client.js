import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "srvdtre2",
    dataset: 'production',
    apiVersion: "2023-11-20",
    useCdn: true,
    token: "skXNmx0y4seCXzV0LWkoUlZeZryWwGU1Noh6mzYXKjFG142QOqloLcAyyaBmiAi1LXapuuZGZewWCFywGO2Fai43Y2JbJ0mV3UPR1BmACsfEtnSxbE9jtPMfb4Jom6vbGwDOVBb49dH1OuvLOfBNHIyMcDhSYNZcim6WSPsXpy5UEyK7DVnB"
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
