import { TemplatePair } from '../models/templates'

/*tslint:disable */
export const defaultTemplate: TemplatePair = {
    detail: {
        details: {
            fields: [{ value: '$.id' }, { value: '-' }],
        },
        sections: [
            {
                id: 'summary',
                name: 'Summary',
                type: 'page',
                sections: [
                    {
                        name: 'Summary',
                        type: 'summary-panel',
                        sections: [
                            {
                                name: 'Recent events',
                                type: 'timeline',
                                fields: [{ value: '$.events' }],
                            },
                            // {
                            //     name: 'Action on',
                            //     type: 'case-action-alert',
                            //     fields: [{ value: '$.state' }]
                            // },
                            {
                                name: '',
                                type: 'data-list',
                                fields: [],
                            },
                            {
                                name: '',
                                type: 'data-list',
                                fields: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 'casefile',
                name: 'Case file',
                type: 'page',
                sections: [
                    {
                        id: 'documents',
                        name: 'Case file',
                        type: 'document-panel',
                        fields: [{ value: '' }],
                    },
                ],
            },
            {
                id: 'timeline',
                name: 'Timeline',
                type: 'page',
                sections: [
                    {
                        id: 'events',
                        name: 'Timeline',
                        type: 'timeline-panel',
                        fields: [{ value: '$.events' }],
                    },
                ],
            },
        ],
        decision: {
            id: 'decision',
            name: 'Make a decision',
            type: 'decision-page',
            options: [
                {
                    id: 'true',
                    name: 'True',
                },
                {
                    id: 'false',
                    name: 'False',
                },
            ],
        },
    },
    list: {
        columns: [
            {
                label: 'Case Reference',
                case_field_id: 'caseRef',
                value: '$.id',
            },
            {
                label: 'Parties',
                case_field_id: 'parties',
                value: [],
            },
            {
                label: 'Type',
                case_field_id: 'type',
                value: ['$.caseTypeId'],
            },
            {
                label: 'Decision needed on',
                case_field_id: 'status',
                value: '$.status',
            },
            {
                label: 'Case Start Date',
                case_field_id: 'createdDate',
                value: '$.createdDate',
                date_format: 'd MMM yyyy',
            },
            {
                label: 'Date of Last Action',
                case_field_id: 'lastModified',
                value: '$.lastModified',
                date_format: 'd MMM yyyy',
            },
        ],
    },
}
