interface IssuingVC{
    carNumber: string;
    walletPassword: string;
}
interface CarVC{
    referent: string;
    name: string;
    carModel: string;
    carNumber: string;
    carFuel: string;
    carDeliveryDate: string;
    inspectionRecord: string;
    drivingRecord: string;
}
interface RegisterCar{
    walletPassword:string,
    referentVC:string,
    location:{
    sharingLocation:string,
        sharingLocationAddress: string,
        sharingLatitude:string,
        sharingLongitude: string
    },
    sharingPrice:string,
    timeList:string[],
}

interface CarInfo{
    carID: number,
    ownerID: number,
    model: string,
    engine: string,
    deliveryDate: string,
    drivingRecord: number,
    inspectionRecord: string,
    dateList: string[],
    sharingLocation: string,
    sharingLocationAddress: string,
    sharingLatitude: number,
    sharingLongitude: number,
    sharingAvailable: true,
    sharingPrice: number,
    sharingRating: number
}

