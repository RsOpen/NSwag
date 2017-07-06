﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.2.0.0 (NJsonSchema v9.2.5.0) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { inject } from 'aurelia-framework';
import { HttpClient, RequestInit } from 'aurelia-fetch-client';

@inject(String, HttpClient)
export class SampleDataClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.baseUrl = baseUrl ? baseUrl : "";
        this.http = http ? http : <any>window;
    }

    weatherForecasts(): Promise<WeatherForecast[] | null> {
        let url_ = this.baseUrl + "/api/SampleData/WeatherForecasts";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processWeatherForecasts(_response);
        });
    }

    protected processWeatherForecasts(response: Response): Promise<WeatherForecast[] | null> {
        const status = response.status;
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: WeatherForecast[] | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(WeatherForecast.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText);
            });
        }
        return Promise.resolve<WeatherForecast[] | null>(<any>null);
    }

    getFile(fileName: string | undefined): Promise<FileResponse | null> {
        let url_ = this.baseUrl + "/api/SampleData/GetFile?";
        if (fileName === undefined)
            throw new Error("The parameter 'fileName' must be defined.");
        else
            url_ += "fileName=" + encodeURIComponent("" + fileName) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetFile(_response);
        });
    }

    protected processGetFile(response: Response): Promise<FileResponse | null> {
        const status = response.status;
        if (status === 200) {
            const contentDisposition = response.headers.get("content-disposition");
            const fileNameMatch = contentDisposition ? /filename="?([^"]*)"?;/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            let headers: any = {}; if (response.headers.forEach) { response.headers.forEach((v, k) => headers[k] = v); };
            return response.blob().then(blob => { return { fileName: fileName, data: blob, headers: headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText);
            });
        }
        return Promise.resolve<FileResponse | null>(<any>null);
    }

    deleteShop(id: string, additionalIds: string[] | undefined): Promise<void> {
        let url_ = this.baseUrl + "/api/SampleData?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "additionalIds": additionalIds, 
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteShop(_response);
        });
    }

    protected processDeleteShop(response: Response): Promise<void> {
        const status = response.status;
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText);
            });
        }
        return Promise.resolve<void>(<any>null);
    }
}

export class WeatherForecast implements IWeatherForecast {
    station?: Station | undefined;
    dateFormatted?: string | undefined;
    temperatureC: number;
    summary?: string | undefined;
    temperatureF: number;

    constructor(data?: IWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.station = data["station"] ? Station.fromJS(data["station"]) : <any>undefined;
            this.dateFormatted = data["dateFormatted"];
            this.temperatureC = data["temperatureC"];
            this.summary = data["summary"];
            this.temperatureF = data["temperatureF"];
        }
    }

    static fromJS(data: any): WeatherForecast {
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["station"] = this.station ? this.station.toJSON() : <any>undefined;
        data["dateFormatted"] = this.dateFormatted;
        data["temperatureC"] = this.temperatureC;
        data["summary"] = this.summary;
        data["temperatureF"] = this.temperatureF;
        return data; 
    }
}

export interface IWeatherForecast {
    station?: Station | undefined;
    dateFormatted?: string | undefined;
    temperatureC: number;
    summary?: string | undefined;
    temperatureF: number;
}

export class Station implements IStation {
    name?: string | undefined;
    data?: ExtensionData | undefined;

    constructor(data?: IStation) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.data = data["data"] ? ExtensionData.fromJS(data["data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): Station {
        let result = new Station();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["data"] = this.data ? this.data.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IStation {
    name?: string | undefined;
    data?: ExtensionData | undefined;
}

export class ExtensionData implements IExtensionData {

    [key: string]: string | any; 

    constructor(data?: IExtensionData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): ExtensionData {
        let result = new ExtensionData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        return data; 
    }
}

export interface IExtensionData {

    [key: string]: string | any; 
}

export interface FileResponse {
    data: Blob;
    fileName?: string;
	headers?: { [name: string]: any };
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result: any; 

    constructor(message: string, status: number, response: string, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}

function throwException(message: string, status: number, response: string, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, null);
}