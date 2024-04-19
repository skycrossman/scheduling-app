var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
var base = Airtable.base("appklVAIrAhkGj98d");

export async function getSessions() {
  const sessions: any[] = [];
  await base("Sessions")
    .select({
      fields: [
        "Title",
        "Description",
        "Start time",
        "End time",
        "Hosts",
        "Host name",
        "Host email",
        "Location",
      ],
    })
    .eachPage(function page(records: any, fetchNextPage: any) {
      records.forEach(function (record: any) {
        sessions.push(record.fields);
      });
      fetchNextPage();
    });
  return sessions;
}