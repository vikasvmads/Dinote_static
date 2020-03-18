
async function getData() {
    const client = await contentful.createClient({
        space: "4lb9qnfm7q3h",
		accessToken: "THkiXl7sEQYJU2g1ktl_fv-sV05DIr_nZbpwP_7aUo4"
    });
    return await client.getEntry("4WN4ltr3UwdUadiVGAlN1T");
}

getData().then(entry => {
    document.getElementsByClassName('img-fluid')[0].src = 'https:' + entry.fields.image.fields.file.url;
	document.getElementsByClassName('fs-0')[0].innerHTML = entry.fields.title;
    document.getElementsByClassName('mb-0')[2].innerHTML =  entry.fields.description;
}).catch(err => console.log(err))
