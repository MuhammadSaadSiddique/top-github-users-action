let headerComponent = function () {
    let create = function (pageTitle, country) {
        let markdown = ``;
        if(pageTitle === undefined && country === undefined){
            markdown = markdown + `# Top GitHub Users By Country `;
            markdown = markdown + ` [<img alt="Image of insights" src="https://github.com/MuhammadSaadSiddique/Views/blob/master/graph/682451803/small/year.png" height="20">](https://github.com/MuhammadSaadSiddique/Views/blob/master/readme/682451803/year.md)\n`
            markdown = markdown + `[![Top GitHub Users](https://github.com/gayanvoice/top-github-users/actions/workflows/action.yml/badge.svg)](https://github.com/gayanvoice/top-github-users/actions/workflows/action.yml) `;
            markdown = markdown + `[![Image of insights](https://github.com/MuhammadSaadSiddique/Views/blob/master/svg/682451803/badge.svg)](https://github.com/MuhammadSaadSiddique/Views/blob/master/readme/682451803/week.md)\n\n`;
        } else {
            markdown = markdown + `# Top GitHub Users By ${pageTitle} in ${country} `;
            markdown = markdown + ` [<img alt="Image of insights" src="https://github.com/MuhammadSaadSiddique/Views/blob/master/graph/682451803/small/year.png" height="20">](https://github.com/MuhammadSaadSiddique/Views/blob/master/readme/682451803/year.md)\n`
            markdown = markdown + `[![Top GitHub Users](https://github.com/gayanvoice/top-github-users/actions/workflows/action.yml/badge.svg)](https://github.com/gayanvoice/top-github-users/actions/workflows/action.yml) `;
            markdown = markdown + `[![Image of insights](https://github.com/MuhammadSaadSiddique/Views/blob/master/svg/682451803/badge.svg)](https://github.com/MuhammadSaadSiddique/Views/blob/master/readme/682451803/week.md)\n\n`;
        }
        return markdown;
    }
    return {
        create: create,
    };
}();
module.exports = headerComponent;
