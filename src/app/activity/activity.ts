export class Activity {
  id: number | undefined;
  activity_id: number | undefined;
  name: string | undefined;
  critical_power: number | undefined;
  start_time: number = 0;
  moving_time: number = 0;
  elapsed_time: number = 0;
  distance: number = 0;
  elevation_gain: number | undefined;
  elevation_loss: number | undefined;
  max_elevation: number | undefined;
  min_elevation: number | undefined;
  average_speed: number | undefined;
  max_speed: number | undefined;
  average_cadence: number | undefined;
  max_cadence: number | undefined;
  min_cadence: number | undefined;
  average_stride_length: number | undefined;
  max_stride_length: number | undefined;
  min_stride_length: number | undefined;
  average_ground_time: number | undefined;
  max_ground_time: number | undefined;
  min_ground_time: number | undefined;
  average_oscillation: number | undefined;
  max_oscillation: number | undefined;
  min_oscillation: number | undefined;
  average_power: number | undefined;
  max_power: number | undefined;
  average_heart_rate: number | undefined;
  max_heart_rate: number | undefined;
  average_leg_spring: number | undefined;
  stress: number = -1;
  max_vertical_stiffness: number | undefined;
  time_in_zone_one: number | undefined;
  time_in_zone_two: number | undefined;
  time_in_zone_three: number | undefined;
  time_in_zone_four: number | undefined;
  time_in_zone_five: number | undefined;
  temperature: number | undefined;
  humidity: number | undefined;
  dew_point: number | undefined;
  wind_bearing: number | undefined;
  wind_speed: number | undefined;
  wind_gust: number | undefined;
  icon: string | undefined;

  private static pad(n: number) {
    const d: string = "0" + n.toString();
    return d.substring(d.length - 2);
  }

  getDate(): string {
    const d: Date = new Date(this.start_time * 1000);
    return d.toDateString();
  }

  getTime(): string {
    const d: Date = new Date(this.start_time * 1000);
    return d.toLocaleTimeString();
  }

  getMovingTime(): string {
    let seconds = this.moving_time;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    if (hours) {
      return hours + ":" + Activity.pad(minutes) + ":" + Activity.pad(seconds);
    } else if (minutes) {
      return minutes + ":" + Activity.pad(seconds);
    } else {
      return seconds.toString();
    }
  }

  getDistance(): string {
    return (this.distance / 1609.34).toFixed(2);
  }

  getAveragePower(): string | undefined {
    return (this.average_power)?.toFixed(0);
  }
}
