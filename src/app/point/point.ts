export class Point {
  id: number | undefined;
  activity_id: number | undefined;
  vertical_power: number | undefined;
  air_power: number | undefined;
  oscillation: number | undefined;
  ground_time: number | undefined;
  leg_spring: number | undefined;
  stress: number | undefined;
  vertical_ground_reaction_force: number | undefined;
  timestamp: number = 0;
  power: number = 0;
  heart_rate: number = 0;
  cadence: number | undefined;
  stride_length: number | undefined;
  distance: number | undefined;
  speed: number | undefined;
  elevation: number | undefined;
  grade: number | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  power_duration: number | undefined;

  getTime(): string {
    const d: Date = new Date(this.timestamp * 1000);
    return d.toLocaleTimeString();
  }
}
