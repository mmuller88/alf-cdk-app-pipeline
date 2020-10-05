
export const prodAccount: Account = {
  id: '981237193288',
  region: 'us-east-1',
  stage: 'prod',
  domainName: 'alfpro.net',
  subDomain: 'app',
  acmCertRef: 'arn:aws:acm:us-east-1:981237193288:certificate/62010fca-125e-4780-8d71-7d745ff91789',
  hostedZoneId: 'Z05027561FL1C7WWU4SX4',
  zoneName: 'alfpro.net.',
  // subDomain: process.env.SUB_DOMAIN || 'app',
}

export const devAccount: Account = {
  id: '981237193288',
  region: 'eu-central-1',
  stage: 'dev',
  domainName: 'dev.alfpro.net',
  subDomain: 'app',
  acmCertRef: 'arn:aws:acm:us-east-1:981237193288:certificate/f605dd8c-4ae3-4c1b-9471-4b152e0f8846',
  hostedZoneId: 'Z036396421QYOR6PI3CPX',
  zoneName: 'dev.alfpro.net.',
}

export interface Account {
  id: string;
  region: string;
  stage: string;
  domainName: string;
  subDomain: string;
  acmCertRef: string;
  hostedZoneId: string;
  zoneName: string;
}