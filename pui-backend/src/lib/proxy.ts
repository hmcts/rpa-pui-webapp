import * as express from 'express'
import * as log4js from 'log4js'
import * as striptags from 'striptags'
import { config } from '../config'
import { http } from '../lib'
import { EnhancedRequest } from './models'

const logger = log4js.getLogger('proxy')
logger.level = config.logging

function setHeaders(req: EnhancedRequest) {
    const headers: any = {}

    headers['content-type'] = req.headers['content-type']
    if (req.headers.accept) {
        headers.accept = req.headers.accept || null
    }
    if (req.headers.experimental) {
        headers.experimental = req.headers.experimental || null
    }

    return headers
}

export async function get(req: EnhancedRequest, res: express.Response, next: express.NextFunction) {
    const url = striptags(req.url).replace('/api/ccd', '')

    const headers: any = setHeaders(req)

    try {
        const response = await http.get(`${config.services.ccd.componentApi}${url}`, { headers })

        res.status(200)
        res.send(response.data)
    } catch (e) {
        res.status(e.response.status)
        res.send(e.response.data)
    }
}

export async function put(req: EnhancedRequest, res: express.Response, next: express.NextFunction) {
    const url = striptags(req.url).replace('/api/ccd', '')

    const headers: any = setHeaders(req)

    try {
        const response = await http.put(`${config.services.ccd.componentApi}${url}`, req.body, { headers })
        res.status(200)
        res.send(response.data)
    } catch (e) {
        res.status(e.response.status)
        res.send(e.response.data)
    }
}

export async function post(req: EnhancedRequest, res: express.Response, next: express.NextFunction) {
    const url = striptags(req.url).replace('/api/ccd', '')

    const headers: any = setHeaders(req)

    try {
        const response = await http.post(`${config.services.ccd.componentApi}${url}`, req.body, { headers })
        res.status(200)
        res.send(response.data)
    } catch (e) {
        res.status(e.response.status)
        res.send(e.response.data)
    }
}
