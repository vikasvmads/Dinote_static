
async function getData() {
    const client = await contentful.createClient({
        space: "aq57ffyg8jbb",
        accessToken: "5DXMbsR5nN-cmkrElpnr8wl_CZB6soqIdzTsIBbz7nc"
    });
    return await client.getEntry("5qtrwY6fGvxL7VVJFNjwEO");
}

getData().then(entry => {
    document.getElementsByClassName('img-fluid')[0].src = 'https:' + entry.fields.images.fields.file.url;
    document.getElementsByClassName('fs-0')[0].innerHTML = entry.fields.articleTitle;
    const rawRichTextField = entry.fields.description;
    return documentToHtmlString(rawRichTextField);
}).then(renderedHtml => {
    document.getElementsByClassName('mb-0')[2].innerHTML = renderedHtml;
}).catch(err => console.log(err))
