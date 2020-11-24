import { TestBed } from "@angular/core/testing";

import { ItshareApiService } from "./itshare-api.service";

describe("ItshareApiService", () => {
  let service: ItshareApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItshareApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
