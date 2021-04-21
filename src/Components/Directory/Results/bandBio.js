class bandBio {
    constructor(lyrical_themes, current_label, description) {
        this.lyrical_themes = lyrical_themes;
        this.current_label = current_label;
        this.description = description; 
    }
    getLyricalThemes() {
        return this.lyrical_themes; 
    }
    getCurrentLabel() {
        return this.current_label;
    }
    getDescription() {
        return this.description; 
    }

}

module.exports=bandBio;
