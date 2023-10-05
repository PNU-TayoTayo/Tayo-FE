interface mapBound {
    leftLatitude: number;
    leftLongitude: number;
    rightLatitude: number;
    rightLongitude: number;
}
interface mapSearch extends mapBound {
    date: string;
}