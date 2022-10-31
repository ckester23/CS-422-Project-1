/* frame interface for storing datasets
and dataset meta data 

-assumes all ts are set/heirarch
-non heirarch is just single ts
*/


export interface Frame {
    setName: string;
}

export interface Collection {
    colName: string;
    frames: Frame [];
}