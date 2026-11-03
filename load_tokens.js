const fs = require('fs');
const path = require('path');

/**
 * 프로젝트 로컬 tokens.json 및 .env 에서 토큰을 로드하는 헬퍼 함수
 */
function getTokens() {
  const jsonPath = path.join(__dirname, 'tokens.json');
  if (fs.existsSync(jsonPath)) {
    return JSON.parse(fs.readFileSync(jsonPath, 'utf8')).tokens;
  }
  return null;
}

module.exports = { getTokens };
