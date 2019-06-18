import { TestBed } from '@angular/core/testing';

import { ChatbotmessageService } from './chatbotmessage.service';

describe('ChatbotmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatbotmessageService = TestBed.get(ChatbotmessageService);
    expect(service).toBeTruthy();
  });
});
