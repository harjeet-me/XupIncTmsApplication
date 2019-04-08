export const enum EquipmentEnum {
    TRAILER = 'TRAILER',
    CONTAINER = 'CONTAINER',
    CHASIS = 'CHASIS'
}

export const enum SizeEnum {
    FIFTYTHREE = 'FIFTYTHREE',
    FORTYTHREE = 'FORTYTHREE'
}

export interface IEquipment {
    id?: number;
    number?: string;
    type?: EquipmentEnum;
    size?: SizeEnum;
    insurance?: string;
}

export class Equipment implements IEquipment {
    constructor(
        public id?: number,
        public number?: string,
        public type?: EquipmentEnum,
        public size?: SizeEnum,
        public insurance?: string
    ) {}
}
