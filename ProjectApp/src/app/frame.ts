/* frame interface for storing datasets
and dataset meta data */
export interface Frame {
    // name of dataset
    frameTitle: string;
    // necceseary request to get data
    frameRequest?: string;
    // metadata
    frameMeta?: string[];
    // local storage for dataset
    frameData?: object;
}