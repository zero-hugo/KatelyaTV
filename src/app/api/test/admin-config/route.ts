/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server';

import { getStorage } from '@/lib/db';

export async function GET(_request: NextRequest) {
  try {
    console.log('Testing admin config retrieval...');
    
    const storage = getStorage();
    const config = await storage.getAdminConfig();
    
    console.log('Admin config result:', config ? 'Found' : 'Not found');
    
    return NextResponse.json({ 
      success: true, 
      hasConfig: !!config,
      config: config,
      message: config ? '配置加载成功' : '未找到配置，但连接正常'
    });
    
  } catch (error) {
    console.error('Admin config test failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      message: '配置加载失败'
    }, { status: 500 });
  }
}
