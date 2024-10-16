```
// fetchTextContent.js
import AWS from 'aws-sdk'

// Configure the AWS SDK
AWS.config.update({
  region: 'us-west-2',
  // Add your AWS credentials here or use environment variables
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const dynamoDB = new AWS.DynamoDB.DocumentClient()
const tableName = 'funnelAIVariablesCustomV3'

export async function fetchTextContent() {
  const params = {
    TableName: tableName,
    Limit: 3,
    // Add any necessary query parameters here
  }

  try {
    const data = await dynamoDB.scan(params).promise()
    const textContent = {}

    data.Items.forEach(item => {
      textContent[item.customField] = item.customValue
    })

    return textContent
  } catch (error) {
    console.error('Error fetching data from DynamoDB:', error)
    return {}
  }
}
```