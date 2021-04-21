class bandLineup {
    constructor(formation_year, years_active, lineup) {
        this.formation_year = formation_year;
        this.years_active = years_active;
        this.lineup = lineup; 
    }
    getFormationYear() {
        return this.formation_year; 
    }
    getYearsActive() {
        return this.years_active;
    }
    getLineup() {
        return this.lineup; 
    }

}

module.exports=bandLineup;