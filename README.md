
        <ng-template #cardSettingsTemplate let-item>
  <div class="bg-white shadow rounded p-4 border border-gray-200 space-y-2">

    <!-- 🖼️ Common: Avatar, Name, Email -->
    <div class="flex items-center space-x-4" *ngIf="item.Avatar || item.Name || item.Email">
      <img *ngIf="item.Avatar" [src]="item.Avatar" alt="avatar" class="w-12 h-12 rounded-full border" />
      <div>
        <h2 *ngIf="item.Name" class="text-lg font-semibold">{{ item.Name }}</h2>
        <p *ngIf="item.Email" class="text-sm text-gray-500">{{ item.Email }}</p>
      </div>
    </div>

    <!-- 🎯 Priority (All lead, Qualified, Proposal, Feedback) -->
    <p *ngIf="['All lead', 'Qualified lead', 'Proposal sent', 'Client feedback'].includes(item.Status)">
      📌 Priority: {{ item.Priority }}
    </p>

    <!-- 🌐 Source (All lead, Qualified, Proposal, Feedback) -->
    <p *ngIf="['All lead', 'Qualified lead', 'Proposal sent', 'Client feedback'].includes(item.Status)">
      🌐 Source: {{ item.Source }}
    </p>

    <!-- 🏢 Niche (All) -->
    <p *ngIf="item.ClientNiche">🏢 Niche: {{ item.ClientNiche }}</p>

    <!-- 🏙️ Company (All) -->
    <p *ngIf="item.ClientCompany">🏙️ Company: {{ item.ClientCompany }}</p>

    <!-- 📅 Schedule Time (Qualified lead, Proposal sent) -->
    <p *ngIf="['Qualified lead', 'Proposal sent'].includes(item.Status)">
      📅 Schedule: {{ item.ScheduleTime }}
    </p>

    <!-- 💰 Proposal Money (Qualified lead, Proposal sent) -->
    <p *ngIf="['Qualified lead', 'Proposal sent'].includes(item.Status)">
      💰 Proposed: {{ item.CompanyProposeMoney }}
    </p>

    <!-- 🔁 Follow-up (Proposal sent, Declined, Won) -->
    <p *ngIf="['Proposal sent', 'Declined', 'Won'].includes(item.Status)">
      🔁 Follow-up: {{ item.FollowUp }}
    </p>

    <!-- 📆 Closing (Proposal sent only) -->
    <p *ngIf="item.Status === 'Proposal sent'">
      📆 Closing: {{ item.Closing }}
    </p>

    <!-- 💬 Feedback (Client feedback) -->
    <p *ngIf="item.Status === 'Client feedback'">
      💬 Feedback: {{ item.Feedback }}
    </p>

    <!-- ❌ Client Result (Declined, Won) -->
    <p *ngIf="['Declined', 'Won'].includes(item.Status)">
      ❌ Client Result: {{ item.ClientResult }}
    </p>

    <!-- 🏆 Company Won (Won only) -->
    <p *ngIf="item.Status === 'Won'">
      🏆 Company Won: {{ item.Companywon }}
    </p>

  </div>
</ng-template>