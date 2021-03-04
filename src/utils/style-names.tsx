const styleNames = (styles: object, classes: any[], globalClasses?: string[]) => {
  const newArray: string[] = [];
  classes.map((themeItem: string | string[]) => {
    if (typeof themeItem === "string" && styles[themeItem])
      newArray.push(styles[themeItem]);
    if (Array.isArray(themeItem)) {
      themeItem.map((arrayThemeItem) => {
        if (styles[arrayThemeItem]) newArray.push(styles[arrayThemeItem]);
      });
    }
    return;
  });

  globalClasses?.forEach((className) => {
    newArray.push(className);
  });

  return newArray.join(" ");
};

export default styleNames;
