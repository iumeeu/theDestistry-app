import { type SchemaTypeDefinition } from 'sanity'

import blogPost from './documents/blog.post'
import blogCategory from './documents/blog.category'
import person from './documents/person'

import horizontalContent from './objects/horizontal-content'
import uid from './objects/uid'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'
import { blockContentType } from '@/sanity/schemaTypes/objects/blockContentType'
import teams from '@/sanity/schemaTypes/documents/teams'
import gallery from '@/sanity/schemaTypes/objects/gallery'
import tag from '@/sanity/schemaTypes/documents/tag'
import serviceCategory from '@/sanity/schemaTypes/documents/service.category'
import servicePost from '@/sanity/schemaTypes/documents/service.post'
import customTable from '@/sanity/schemaTypes/objects/customTable'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    horizontalContent,
    uid,
    link,
    linkList,
    metadata,
    gallery,
    customTable,
    blockContentType,
    blogPost,
    person,
    blogCategory,
    teams,
    tag,
    serviceCategory,
    servicePost
  ],
}
