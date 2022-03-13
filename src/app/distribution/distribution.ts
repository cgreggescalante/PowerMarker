export class Distribution {
  type: string;
  buckets: {bucket: number, count: number}[];

  constructor(type: string) {
    this.type = type;
    this.buckets = [];
  }

  setBuckets(buckets: {bucket: number, count: number}[]) {
    const maxBucket = Math.max.apply(Math, buckets.map((elm) => elm.bucket));

    for (let i = 0; i <= maxBucket; i += 10) {
      const bucket = buckets.find(elm => elm.bucket == i);
      if (bucket) {
        this.buckets.push(bucket);
      } else {
        this.buckets.push({
          bucket: i,
          count: 0
        });
      }
    }
  }
}
