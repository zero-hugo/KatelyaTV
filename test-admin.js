/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
// 测试脚本用于验证管理员配置修复

async function testAdminConfig() {
  try {
    console.log('Testing admin config endpoint...');
    const response = await fetch('http://localhost:3000/api/test/admin-config');
    const result = await response.json();
    console.log('Admin config test result:', result);
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

testAdminConfig();
