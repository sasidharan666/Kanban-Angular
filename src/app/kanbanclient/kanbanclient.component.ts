import { Component } from '@angular/core';
import { SyncfusionKanbanModule } from '../syncfusion-kanban.module'; // adjust path as needed
import { registerLicense } from '@syncfusion/ej2-base';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [SyncfusionKanbanModule],
  templateUrl: './kanbanclient.component.html',
})
export class KanbanComponentStandalone {
  constructor() {
    registerLicense(
      'Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCeEx3Rnxbf1x1ZFRHal9UTnZWUiweQnxTdEBjXH5acXVWQWRfWEN2W0lfag=='
    );
  }

  public cardSettings: CardSettingsModel = {
    headerField: 'Id',
    contentField: 'Summary',
    selectionType: 'Multiple'
  };

  public data = [
    {
      Id: 1,
      Status: 'All leads',
      Avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
      Name: 'Liam Carter',
      Email: 'liam.carter@example.com',
      Priority: 'High',
      Source: 'Meta',
      Closing: 'March 22, 2025',
      FollowUp: 'Required',
      Feedback: 'Awaiting feedback ',
      Companywon: '$220k',
      ScheduleTime: 'Demo scheduled',
      CompanyProposeMoney: '240k',
      ClientResult: 'Accepted',
      ClientNiche: 'Tech',
      ClientCompany: 'Google',
    },
    {
      Id: 2,
      Status: 'Qualified lead',
      Avatar: 'https://randomuser.me/api/portraits/women/37.jpg',
      Name: 'Ava Nguyen',
      Email: 'ava.nguyen@example.com',
      Priority: 'Medium',
      Source: 'Linkedin',
      Closing: 'April 10, 2025',
      FollowUp: 'Not required',
      Feedback: 'Budget constraint.',
      Companywon: '$180k',
      ScheduleTime: 'Follow-up scheduled',
      CompanyProposeMoney: '200k',
      ClientResult: 'Declined',
      ClientNiche: 'Fashion',
      ClientCompany: 'Trends',
    },
    {
      Id: 3,
      Status: 'Proposal sent',
      Avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
      Name: 'Noah Brown',
      Email: 'noah.brown@example.com',
      Priority: 'Low',
      Source: 'Meta',
      Closing: 'May 5, 2025',
      FollowUp: 'Required',
      Feedback: 'Pricing issue.',
      Companywon: '$90k',
      ScheduleTime: 'No reply yet',
      CompanyProposeMoney: '110k',
      ClientResult: 'Declined',
      ClientNiche: 'Food',
      ClientCompany: 'KFC',
    },
    {
      Id: 4,
      Status: 'All leads',
      Avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      Name: 'Olivia Davis',
      Email: 'olivia.davis@example.com',
      Priority: 'High',
      Source: 'Meta',
      Closing: 'March 30, 2025',
      FollowUp: 'Required',
      Feedback:
        'Awaiting feedback - Client requested more time for internal review.',
      Companywon: '$300k',
      ScheduleTime: 'Demo scheduled',
      CompanyProposeMoney: '320k',
      ClientResult: 'Accepted',
      ClientNiche: 'Tech',
      ClientCompany: 'Nike',
    },
    {
      Id: 5,
      Status: 'Declined',
      Avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
      Name: 'Elijah Wilson',
      Email: 'elijah.wilson@example.com',
      Priority: 'Medium',
      Source: 'Google',
      Closing: 'April 18, 2025',
      FollowUp: 'Not required',
      Feedback: 'Budget constraints',
      Companywon: '$150k',
      ScheduleTime: 'Follow-up scheduled',
      CompanyProposeMoney: '170k',
      ClientResult: 'Declined',
      ClientNiche: 'Fashion',
      ClientCompany: 'McDonald',
    },
    {
      Id: 6,
      Status: 'Won',
      Avatar: 'https://randomuser.me/api/portraits/women/41.jpg',
      Name: 'Isabella Moore',
      Email: 'isabella.moore@example.com',
      Priority: 'High',
      Source: 'Meta',
      Closing: 'March 14, 2025',
      FollowUp: 'Required',
      Feedback: 'Client happy with pricing .',
      Companywon: '$310k',
      ScheduleTime: 'Demo scheduled',
      CompanyProposeMoney: '310k',
      ClientResult: 'Accepted',
      ClientNiche: 'Tech',
      ClientCompany: 'Apple',
    },
    {
      Id: 7,
      Status: 'All leads',
      Avatar: 'https://randomuser.me/api/portraits/men/53.jpg',
      Name: 'Lucas Bennett',
      Email: 'lucas.bennett@example.com',
      Priority: 'Low',
      Source: 'Linkedin',
      Closing: 'April 25, 2025',
      FollowUp: 'Required',
      Feedback: 'Initial discussion positive.',
      Companywon: '$95k',
      ScheduleTime: 'Follow-up scheduled',
      CompanyProposeMoney: '100k',
      ClientResult: 'Accepted',
      ClientNiche: 'Food',
      ClientCompany: 'KFC',
    },
    {
      Id: 8,
      Status: 'Qualified lead',
      Avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
      Name: 'Mia Thomas',
      Email: 'mia.thomas@example.com',
      Priority: 'Medium',
      Source: 'Google',
      Closing: 'May 2, 2025',
      FollowUp: 'Required',
      Feedback: 'Awaiting feedback .',
      Companywon: '$200k',
      ScheduleTime: 'No reply yet',
      CompanyProposeMoney: '210k',
      ClientResult: 'Pending',
      ClientNiche: 'Fashion',
      ClientCompany: 'Trends',
    },
    {
      Id: 9,
      Status: 'Declined',
      Avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
      Name: 'James Martinez',
      Email: 'james.martinez@example.com',
      Priority: 'Low',
      Source: 'Linkedin',
      Closing: 'March 29, 2025',
      FollowUp: 'Not required',
      Feedback: 'Pricing issue.',
      Companywon: '$120k',
      ScheduleTime: 'No reply yet',
      CompanyProposeMoney: '130k',
      ClientResult: 'Declined',
      ClientNiche: 'Tech',
      ClientCompany: 'Intel',
    },
    {
      Id: 10,
      Status: 'Client feedback',
      Avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      Name: 'Charlotte Garcia',
      Email: 'charlotte.garcia@example.com',
      Priority: 'High',
      Source: 'Meta',
      Closing: 'May 15, 2025',
      FollowUp: 'Required',
      Feedback: 'Internal approval ',
      Companywon: '$270k',
      ScheduleTime: 'Follow-up scheduled',
      CompanyProposeMoney: '280k',
      ClientResult: 'Pending',
      ClientNiche: 'Fashion',
      ClientCompany: 'Zara',
    },
    {
      Id: 11,
      Status: 'Client feedback',
      
       Avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
      Name: 'James Martinez',
      Email: 'james.martinez@example.com',
      Priority: 'Low',
      Source: 'Linkedin',
      Closing: 'March 29, 2025',
      FollowUp: 'Not required',
      Feedback: 'Pricing issue.',
      Companywon: '$120k',
      ScheduleTime: 'No reply yet',
      CompanyProposeMoney: '130k',
      ClientResult: 'Declined',
      ClientNiche: 'Tech',
      ClientCompany: 'Intel',
    },
    {
       Id: 12,
      Status: 'Won',
      Avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
      Name: 'Mia Thomas',
      Email: 'mia.thomas@example.com',
      Priority: 'Medium',
      Source: 'Google',
      Closing: 'May 2, 2025',
      FollowUp: 'Required',
      Feedback: 'Awaiting feedback .',
      Companywon: '$200k',
      ScheduleTime: 'No reply yet',
      CompanyProposeMoney: '210k',
      ClientResult: 'Pending',
      ClientNiche: 'Fashion',
      ClientCompany: 'Trends',
    }
  ];

  
  getCount(key: string): number {
    return this.data.filter((item) => item.Status === key).length;
  }

  getIcon(key: string): string {
    const icons: { [key: string]: string } = {
      'All leads': 'group',
      'Qualified lead': 'productivity',
      'Declined': 'cancel',
      'Proposal sent': '',
      'Won': 'trophy',
      'Client feedback': 'groups',
    };
    return icons[key] || '';
  }

  onKanbanDataBound() {
    const headerGroups: Record<string, string[]> = {
      'New leads': ['All leads', 'Qualified lead'],
      'Negotiation': ['Proposal sent', 'Feedback', 'Declined'],
      'Closed': ['Won'],
    };

    const headerGroupIcons: Record<string, string> = {
      'New leads': 'person_add',
      'Negotiation': 'attach_money',
      'Closed': 'trophy',
    };

    document
      .querySelectorAll('.e-stacked-header-cell .e-header-text')
      .forEach((head) => {
        const title = head.textContent?.trim();
        if (!title || !headerGroups[title]) return;

        const count = this.data.filter((card) =>
          headerGroups[title].includes(card.Status)
        ).length;

        const icon = headerGroupIcons[title] || 'folder';
const iconColorClass = icon === 'trophy' ? '!text-[#15803D]' : '!text-[#6B7280] dark:!text-[#D1D5DB]';

        head.innerHTML = `
      <div class="!flex !items-center !gap-x-2 ">
        
       <span class="material-symbols-outlined !text-base ${iconColorClass} " >${icon}</span>
        <span class="!font-semibold !text-sm dark:!text-[#FFFFFF] !text-[#111827]">${title}</span>
        <span class="!text-sm dark:!bg-[#4B5563] !bg-[#E5E7EB] !text-[#374151] !w-5 !h-5 !flex !justify-center !items-center !rounded-sm dark:!text-[#F3F4F6]">${count}</span>

      </div>`;
      });
  }

  toogle() {
    document.body.classList.toggle('dark');
  }
}
