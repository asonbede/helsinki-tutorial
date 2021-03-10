function filterBysearchTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter((item) => item.url.match(regex));
}
describe("filter function", () => {
  test("should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "http://wwww.url1.dev" },
      { id: 2, url: "http://wwww.url2.dev" },
      { id: 3, url: "http://wwww.link3.dev" },
    ];
    const output = [{ id: 3, url: "http://wwww.link3.dev" }];
    expect(filterBysearchTerm(input, "LINK")).toEqual(output);
  }),
    test("should filter by a search term (url)", () => {
      const input = [
        { id: 1, url: "http://wwww.url1.dev" },
        { id: 2, url: "http://wwww.url2.dev" },
        { id: 3, url: "http://wwww.link3.dev" },
      ];
      const output = [
        { id: 1, url: "http://wwww.url1.dev" },
        { id: 2, url: "http://wwww.url2.dev" },
      ];
      expect(filterBysearchTerm(input, "url")).toEqual(output);
    }),
    test("should filter by a search term ('empty string')", () => {
      const input = [
        { id: 1, url: "http://wwww.url1.dev" },
        { id: 2, url: "http://wwww.url2.dev" },
        { id: 3, url: "http://wwww.link3.dev" },
      ];
      const output = [];
      expect(filterBysearchTerm(input, null)).toEqual(output);
    });
});
