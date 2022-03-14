export class Distribution {
  type: string;
  buckets: {bucket: number, count: number}[];

  constructor(type: string) {
    this.type = type;
    this.buckets = [];
  }

  setBuckets(buckets: {bucket: number, count: number}[]) {
    const minBucket = Math.min.apply(Math, buckets.map((elm) => elm.bucket));
    const maxBucket = Math.max.apply(Math, buckets.map((elm) => elm.bucket));

    let begun = false;

    for (let i = minBucket; i <= maxBucket; i += 10) {
      const bucket = buckets.find(elm => elm.bucket == i);
      if (begun) {
        if (bucket) {
          this.buckets.push(bucket)
        } else {
          this.buckets.push({
            bucket: i,
            count: 0
          })
        }
      } else if (bucket && bucket.count >= 10) {
        this.buckets.push(bucket);
        begun = true;
      }
    }
  }

  getBucketLabels(): string[] {
    const labels: string[] = [];
    this.buckets.forEach(bucket => labels.push(bucket.bucket + 'w'));
    return labels;
  }

  getBucketValues(): number[] {
    const values: number[] = [];
    this.buckets.forEach(bucket => values.push(bucket.count));
    return values;
  }
}
