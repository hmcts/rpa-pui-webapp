import axios, { AxiosInstance } from 'axios'
import * as express from 'express'
import * as log4js from 'log4js'
import * as striptags from 'striptags'
import { config } from '../config'
import { Case, EnhancedRequest, SimpleCase } from '../lib/model'

const logger = log4js.getLogger('ccd')
logger.level = config.logging

const http: AxiosInstance = axios.create({})

export async function get(req: EnhancedRequest, res: express.Response, next: express.NextFunction) {
    let url = striptags(req.url).replace('/api/ccd', '')
    url = url.replace(/internal\//, '')
    logger.info(`GET to ${config.services.ccd.componentApi}${url}`)

    try {
        const response = await http.get(`${config.services.ccd.componentApi}${url}`)

        res.status(200)
        res.send(JSON.stringify(response.data))
    } catch (e) {
        res.status(e.response.status)
        res.send()
    }
}

export async function put(req: EnhancedRequest, res: express.Response, next: express.NextFunction) {
    const url = striptags(req.url).replace('/api/ccd', '')

    logger.info(`PUT to ${config.services.ccd.componentApi}${url}`)

    try {
        const response = await http.put(`${config.services.ccd.componentApi}${url}`, req.body)
        res.status(200)
        res.send(JSON.stringify(response.data))
    } catch (e) {
        res.status(e.response.status)
        res.send()
    }
}

export async function post(req: EnhancedRequest, res: express.Response, next: express.NextFunction) {
    const url = striptags(req.url).replace('/api/ccd', '')

    logger.info(`POST to ${config.services.ccd.componentApi}${url}`)

    try {
        const response = await http.post(`${config.services.ccd.componentApi}${url}`, req.body)
        res.status(200)
        res.send(JSON.stringify(response.data))
    } catch (e) {
        res.status(e.response.status)
        res.send()
    }
}
