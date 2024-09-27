declare global {
    type Country = {
        name: string;
        countryCode: string;
    };
    type Holiday = {
        date: string;
        localName: string;
        name: string;
        countryCode: string;
        global: true;
        counties: [string];
        launchYear: number;
        types: [string];
    };
}
