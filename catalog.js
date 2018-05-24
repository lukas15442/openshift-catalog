// Add a Featured category as the first category tab.
window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
    // Required. Must be unique.
    id: "hda",
    // Required
    label: "Hochschule Darmstadt",
    subCategories: [
      {
        // Required. Must be unique.
        id: "hdapad",
        // Required.
        label: "PAD",
        // Optional. If specified, defines a unique icon for this item.
        icon: "https://cdn.rawgit.com/lukas15442/openshift-catalog/357fc7ee/hdalogo.jpg",
        // Required. Items matching any tag will appear in this subcategory.
        tags: [
          "hda",
          "hdapad"
        ]
      }
    ]
  });
