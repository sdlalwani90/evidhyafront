import { Injectable } from '@angular/core';

@Injectable()

export class AutocompleteService {

    constructor() {}

    private find(address_components: Array<AddressComponent>, query: string, val: string = null) {

        for (let attr of address_components) {
            for (let type of attr.types) {
                if (type === query) {
                    return val ? attr[val] : attr;
                }
            }
        }
        return null;
    }

    country_codes(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'country', 'short_name');
    }

    street_number(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'street_number', 'long_name');
    }

    street(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'route', 'long_name');
    }

    city(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'locality', 'long_name');
    }

    state(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_1', 'long_name');
    }

    postal_code(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'postal_code', 'long_name');
    }

    country(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'country', 'long_name');
    }

    administrative_area_level_2(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_2', 'long_name');
    }

    intersection(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'intersection');
    }

    political(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'political');
    }

    administrative_area_level_3(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_3');
    }

    administrative_area_level_4(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_4');
    }

    administrative_area_level_5(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_5');
    }

    colloquial_area(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'colloquial_area');
    }

    ward(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'ward');
    }

    sublocality(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'sublocality');
    }

    sublocality_level_1(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_1');
    }

    sublocality_level_2(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_2');
    }

    sublocality_level_3(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_3');
    }

    sublocality_level_4(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_4');
    }

    sublocality_level_5(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_5');
    }

    neighborhood(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'neighborhood');
    }

    premise(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'premise');
    }

    subpremise(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'subpremise');
    }

    natural_feature(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'natural_feature');
    }

    airport(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'airport');
    }

    park(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'park');
    }

    point_of_interest(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'point_of_interest');
    }

    floor(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'floor');
    }

    establishment(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'establishment');
    }

    parking(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'parking');
    }

    post_box(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'post_box');
    }

    postal_town(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'postal_town');
    }

    room(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'room');
    }

    bus_station(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'bus_station');
    }

    train_station(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'train_station');
    }

    transit_station(address_components: Array<AddressComponent>) {
        return this.find(address_components, 'transit_station');
    }

}

export class Address {
    constructor(public address_components: Array<AddressComponent>,
        public adr_address: string,
        public formatted_address: string,
        public geometry: Coordonate,
        public html_attributions: Array<any>,
        public icon: string,
        public id: string,
        public name: string,
        public place_id: string,
        public reference: string,
        public scope: string,
        public types: Array<any>,
        public url: string,
        public utc_offset: number,
        public vicinity: string,
        public photos: Array<Photos>) {
    }
}

export class Coordonate {
    constructor(public location: Location,
        public viewport: any) {
    }
}

export class Location {
    constructor(public lat: any,
        public lng: any) {
    }
}

export class Photos {
    constructor(public height: string,
        public width: string,
        public html_attributions: Array<string>,
        public getUrl: any) {
    }
}

export class AutoCompleteOptionsClass {
    constructor(
        public bounds: any,
        public componentRestrictions: ComponentRestrictions,
        public types: Array<string>) {
    }
}

export class ComponentRestrictions {
    constructor(
        public country: string) {
    }
}

export class AddressComponent {
    constructor(public long_name: string,
        public short_name: string,
        public types: Array<string>) {
    }
}

export class Constant {

    public static get TYPE_OPTIONS() {
        return [
            '(cities)',
            '(regions)',
            'country',
            'postal_code',
            'sublocality',
            'establishment',
            'address',
            'geocode'
        ];
    };

}

