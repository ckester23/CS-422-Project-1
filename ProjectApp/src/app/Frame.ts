/* frame interface for storing timeseries
and ts meta data */
export interface Frame {
    name: string;

    /* this time series object 
    will most likely contain 
    methods for handeling http request from
    backend*/
    ts?: object;

    /* meta data about time seires */
    tsMeta?: string[];


}