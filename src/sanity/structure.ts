import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('CMS Content')
    .items([
      S.divider(),
      S.documentTypeListItem("blog.post").title("Blog posts"),
      S.documentTypeListItem("blog.category").title("Blog categories"),
      S.divider(),
      S.documentTypeListItem("teams").title("Teams"),
      S.divider(),
      S.documentTypeListItem("service.post").title("Service Posts"),
      S.documentTypeListItem("service.category").title("Service Categories"),
      S.divider(),
      // ...S.documentTypeListItems().filter(
      //   (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
      // ),
    ])
