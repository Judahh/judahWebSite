export class InMemoryDataService {
  createDb() {
    let items = [
      {
          id: 1,
          name: "WhoAmI",
          effect: "",
          page: ""
      },
      {
          id: 2,
          name: "Education",
          effect: "",
          page: ""
      },
      {
          id: 3,
          name: "Skills",
          effect: "",
          page: ""
      },
      {
          id: 4,
          name: "Contact",
          effect: "",
          page: ""
      },
      {
          id: 5,
          name: "Projects",
          effects: "",
          page: ""
      }
    ];
    return { items };
  }
}
