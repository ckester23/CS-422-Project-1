/* frame interface for storing datasets
and dataset meta data 

-assumes all ts are set/heirarch
-non heirarch is just single ts
*/


export interface Frame {
    ts: TS[];
    setName: string;
    Description?: string;
    applicationDomains?: string;
    Keywords?: string;
    isSet: boolean;
    // (1 for univariate, >1 for multivariate)
    vectorSize?: number;
    minLength?: number;
    maxLength?: number;
    // size of ts array
    tsAmmount?: number;
    isComponent?: number;
    contributors?: string;
    relatedPaperReference?: string;
    relatedPaperLink?: string;
}


export interface TS {
    // meta data
    tsName: string;
    description?: string;
    domain?: string;
    units?: string;
    keywords?: string[];
    // Scalar/vector (univariate/multivariate)
    tsParentType?: string;
    vectorSize?: number;
    length?: number;
    samplingPeriod?: string;
    // ts data
    // potentailly just request and no real 
    // ts data
    data?: string;

}