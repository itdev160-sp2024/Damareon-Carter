(function()
{
    var data = [
        {
            name: 'Settings Sync',
            description: 'Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.',
            author: 'Shan Khan',
            url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
            downloads: 3951551,
            stars: 712,
            price: 'Free',
            selector: 'p1'
        },
        {
            name: 'Stylelint',
            description: 'A mighty CSS linter that helps you avoid errors and enforce conventions.',
            author: 'Stylelint',
            url: 'https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint',
            downloads: 2134133,
            stars: 18,
            price: 'Free',
            selector: 'p2'
        }
    ];

    function Package(data)
    {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function()
        {
            return this.downloads.toLocaleString();
        };
        this.getFormattedStars = function()
        {
            return this.stars.toLocaleString();
        };
    };

    var getTodaysDate = function()
    {
        var today = new Date();
        return today.toDateString();
    };

    var getElement = function(id)
    {
        return document.getElementById(id);
    };

    var writePackageInfo = function(package)
    {
        var selector = package.selector,
            nameElement = getElement(selector + '-name'),
            urlElement = getElement(selector + '-url'),
            descriptionElement = getElement(selector + '-description'),
            authorElement = getElement(selector + '-author'),
            downloadsElement = getElement(selector + '-downloads'),
            starsElement = getElement(selector + '-stars'),
            priceElement = getElement(selector + '-price');

        nameElement.textContent = package.name;
        urlElement.textContent = package.url;
        descriptionElement.textContent = package.description;
        authorElement.textContent = "Publisher: " + package.author + " | ";
        downloadsElement.textContent = package.getFormattedDownloads() + " Downloads | ";
        starsElement.textContent = package.getFormattedStars() + " Stars | ";
        priceElement.textContent = package.price;
    };

    dateElement = getElement('date');
    dateElement.textContent = getTodaysDate();

    var settingsSync = new Package(data[0]);
    writePackageInfo(settingsSync);
    var stylelint = new Package(data[1]);
    writePackageInfo(stylelint);
}());