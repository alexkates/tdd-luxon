import { DateTime, Settings } from 'luxon';
import { doSomethingThatDependsOnDateTimeNow } from './doSomethingThatDependsOnDateTimeNow';

describe('Mocking DateTime.now with Luxon', () => {
  it('should return the mock DateTime', () => {
    // Arrange
    const expectedNow = DateTime.local(2021, 6, 1, 23, 0, 0);
    Settings.now = () => expectedNow.toMillis();

    // Act 
    const actual = doSomethingThatDependsOnDateTimeNow();

    // Assert
    expect(actual).toEqual(expectedNow);
  });
});

