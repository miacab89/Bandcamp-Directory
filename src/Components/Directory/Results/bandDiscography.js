class bandDiscography {
    constructor(releases, detailed_discography) {
        this.releases = releases;
        this.detailed_discography = detailed_discography;
    }
    getReleases() {
        return this.releases;
    }
    getDetailedDiscography() {
        return this.detailed_discography;
    }
}

module.exports=bandDiscography;