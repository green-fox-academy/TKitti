import { TestBed } from '@angular/core/testing';

import { WeatherInfoService } from './weather-info.service';

describe('WeatherInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherInfoService = TestBed.get(WeatherInfoService);
    expect(service).toBeTruthy();
  });
});
