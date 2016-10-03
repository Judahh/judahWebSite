export class InMemoryDataService {
  createDb() {
    let items = [
      {
          id: 1,
          name: "WhoAmI",
          effect: "<div id=\"DivIdNeon\"><divid=\"DivIdMenuItem\"><divid=\"DivIdIcon\"><divid=\"DivIdPulse\">c</div></div></div></div>",
          page: ""
      },
      {
          id: 2,
          name: "Education",
          effect: "<div id=\"DivIdNeon\"><divid=\"DivIdMenuItem\"><divid=\"DivIdIcon\"><divid=\"DivIdPulse\">d</div></div></div></div>",
          page: ""
      },
      {
          id: 3,
          name: "Skills",
          effect: "<div id=\"DivIdNeon\"><divid=\"DivIdMenuItem\"><divid=\"DivIdIcon\"><divid=\"DivIdShake\"><divid=\"DivIdHandIcon\"><divid=\"DivIdHandIconOff\">«</div><divid=\"DivIdHandIconOn\">¬</div></div></div></div></div></div>",
          page: ""
      },
      {
          id: 4,
          name: "Contact",
          effect: "<div id=\"DivIdNeon\"><divid=\"DivIdMenuItem\"><divid=\"DivIdIcon\"><divid=\"DivIdShake\">6</div></div></div></div>",
          page: ""
      },
      {
          id: 5,
          name: "Projects",
          effects: "<div id=\"DivIdNeon\"><divid=\"DivIdMenuItem\"><divid=\"DivIdIcon\"><divid=\"DivIdConsoleIcon\"><divid=\"DivIdConsoleIconOff\">i</div><divid=\"DivIdConsoleIconOn\">j</div><divid=\"DivIdConsoleIconOn1\">k</div><divid=\"DivIdConsoleIconOn2\">l</div></div></div></div></div>",
          page: ""
      }
    ];
    return { items };
  }
}
