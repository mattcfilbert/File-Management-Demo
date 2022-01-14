import ApiPayload from "../types/ApiPayload";
import DisplayFile from "../types/DisplayFile";

export function intakeData(json: ApiPayload[]): DisplayFile[] {
    return transformToDisplayData(parseJSON(sanitizeJSON(json)))
}

function sanitizeJSON (json: any): string {
    return JSON.stringify(json).replace(/</g, '\\u003c')
}

function parseJSON (json: string): ApiPayload[] {
    return JSON.parse(json)
}

function transformToDisplayData (data: ApiPayload[]): DisplayFile[] {
    const arr = Array.from(data) as any[]
    return arr.map(d => d = {...d, checked: false}) as DisplayFile[]
}