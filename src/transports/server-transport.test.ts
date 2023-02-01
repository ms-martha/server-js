import ServerTransport from "./server-transport";

describe("Server transport test", () => {

  class DummyTransport extends ServerTransport {

  }

  it("transport implementation throws without start", async () => {
    expect(()=>new DummyTransport().start()).toThrowError()
  });

});
